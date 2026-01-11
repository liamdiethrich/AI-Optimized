"use client";

import { useMemo, useState } from "react";

import { siteContent } from "@/content/site";
import { cn } from "@/lib/cn";

export type RoiValues = {
  runsPerWeek: number;
  minutesPerRun: number;
  hourlyCost: number;
  errorMinutesPerRun: number;
};

const DEFAULT_VALUES: RoiValues = {
  runsPerWeek: 20,
  minutesPerRun: 15,
  hourlyCost: 60,
  errorMinutesPerRun: 0,
};

const WEEKS_PER_MONTH = 4.33;
const LOW_CAPTURE = 0.7;
const HIGH_CAPTURE = 0.9;

export function calculateRoiRange(values: RoiValues) {
  const totalMinutes = Math.max(values.minutesPerRun + values.errorMinutesPerRun, 0);
  const hoursPerMonth = (values.runsPerWeek * totalMinutes * WEEKS_PER_MONTH) / 60;
  const hoursLow = hoursPerMonth * LOW_CAPTURE;
  const hoursHigh = hoursPerMonth * HIGH_CAPTURE;
  const valueLow = hoursLow * values.hourlyCost;
  const valueHigh = hoursHigh * values.hourlyCost;

  return {
    hoursLow,
    hoursHigh,
    valueLow,
    valueHigh,
    hoursPerMonth,
  };
}

type ROICalculatorProps = {
  className?: string;
  values?: RoiValues;
  onValuesChange?: (values: RoiValues) => void;
};

export function ROICalculator({ className, values, onValuesChange }: ROICalculatorProps) {
  const [localValues, setLocalValues] = useState<RoiValues>(values ?? DEFAULT_VALUES);
  const roiCopy = siteContent.site.roi;

  const currentValues = values ?? localValues;

  const handleChange = (next: Partial<RoiValues>) => {
    const updated = { ...currentValues, ...next };
    if (onValuesChange) {
      onValuesChange(updated);
    } else {
      setLocalValues(updated);
    }
  };

  const roi = useMemo(() => calculateRoiRange(currentValues), [currentValues]);

  const formatNumber = (value: number, options?: Intl.NumberFormatOptions) =>
    new Intl.NumberFormat("en-US", options).format(Math.round(value));

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Math.round(value));

  return (
    <div className={cn("aio-card aio-card-hover p-6", className)}>
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgba(var(--aio-text),.65)]">
          ROI calculator
        </p>
        <h3 className="text-2xl font-semibold text-[rgb(var(--aio-text))]">{roiCopy.title}</h3>
        <p className="max-w-2xl text-sm text-[rgba(var(--aio-text),.72)]">
          {roiCopy.helpText}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[rgb(var(--aio-text))]">
          <span className="font-semibold">{roiCopy.fieldsLabels.runsPerWeek}</span>
          <input
            type="number"
            min={0}
            value={currentValues.runsPerWeek}
            onChange={(event) => handleChange({ runsPerWeek: Number(event.target.value) })}
            className="aio-input text-sm"
          />
        </label>
        <label className="space-y-2 text-sm text-[rgb(var(--aio-text))]">
          <span className="font-semibold">{roiCopy.fieldsLabels.minutesPerRun}</span>
          <input
            type="number"
            min={0}
            value={currentValues.minutesPerRun}
            onChange={(event) => handleChange({ minutesPerRun: Number(event.target.value) })}
            className="aio-input text-sm"
          />
        </label>
        <label className="space-y-2 text-sm text-[rgb(var(--aio-text))]">
          <span className="font-semibold">{roiCopy.fieldsLabels.hourlyCost}</span>
          <input
            type="number"
            min={0}
            value={currentValues.hourlyCost}
            onChange={(event) => handleChange({ hourlyCost: Number(event.target.value) })}
            className="aio-input text-sm"
          />
        </label>
        <label className="space-y-2 text-sm text-[rgb(var(--aio-text))]">
          <span className="font-semibold">{roiCopy.fieldsLabels.errorMinutesPerRun}</span>
          <input
            type="number"
            min={0}
            value={currentValues.errorMinutesPerRun}
            onChange={(event) => handleChange({ errorMinutesPerRun: Number(event.target.value) })}
            className="aio-input text-sm"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(var(--aio-text),.65)]">
            Hours saved / month (range)
          </p>
          <p className="text-2xl font-semibold text-[rgb(var(--aio-text))]">
            {formatNumber(roi.hoursLow)}–{formatNumber(roi.hoursHigh)} hrs
          </p>
          <p className="text-xs text-[rgba(var(--aio-text),.65)]">70–90% automation capture</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(var(--aio-text),.65)]">
            Estimated monthly value (range)
          </p>
          <p className="text-2xl font-semibold text-[rgb(var(--aio-text))]">
            {formatCurrency(roi.valueLow)}–{formatCurrency(roi.valueHigh)}
          </p>
          <p className="text-xs text-[rgba(var(--aio-text),.65)]">
            Based on loaded hourly cost
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-sm font-semibold text-[rgb(var(--aio-text))]">Assumptions</p>
        <ul className="space-y-1 text-xs text-[rgba(var(--aio-text),.65)]">
          {roiCopy.assumptions.map((assumption) => (
            <li key={assumption}>• {assumption}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
