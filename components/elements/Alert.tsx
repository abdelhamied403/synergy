import clsx from "clsx";
import React from "react";

export type AlertProps = {
  Title?: JSX.Element | string;
  children: JSX.Element | string;
  Icon?: JSX.Element;
  status?: "primary" | "success" | "warning" | "info" | "danger";
  variant?: "filled" | "bordered";
  className?: string;
};

const Alert = ({
  Title,
  children,
  Icon,
  status,
  variant,
  className,
  ...rest
}: AlertProps) => {
  return (
    <div
      className={clsx(
        "alert",
        status && `alert-${status}`,
        variant && `alert-${variant}`,
        className
      )}
      role="alert"
      {...rest}
    >
      <div className="flex gap-4">
        {Icon && <div className="alert-icon">{Icon}</div>}
        <div className="alert-body">{Title || children}</div>
      </div>
      {Title && <div className="alert-body">{children}</div>}
    </div>
  );
};

export default Alert;
