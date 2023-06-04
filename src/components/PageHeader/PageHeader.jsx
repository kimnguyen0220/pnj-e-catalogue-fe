import classNames from "classnames";
import "./PageHeader.scss";
export const PageHeader = ({
  title,
  children,
  absoluteHeader = true,
  hasPadding = true,
  overflowY = true,
}) => {
  const containerClass = classNames("per-page page-header-container relative", {
    "pl-5 pr-5 md:pl-8 md:pr-3": hasPadding,
  });
  const headerClass = classNames("title-container", {
    "left-0 right-0 pt-5 pb-4 md:relative md:ml-0 md:pb-0 md:mr-0 md:mt-11":
      absoluteHeader,
    "mt-5": !absoluteHeader,
  });

  const pageContentClass = classNames("page-content md:flex md:mb-4 md:mt-2", {
    "overflow-y-scroll": overflowY,
  })
  return (
    <div className={containerClass}>
      {title && (
        <div className={headerClass}>
          <h3>{title}</h3>
        </div>
      )}

      <div className={pageContentClass}>{children}</div>
    </div>
  );
};
