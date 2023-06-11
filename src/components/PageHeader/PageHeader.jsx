import { useAppContext } from "contexts";
import classNames from "classnames";
import "./PageHeader.scss";
export const PageHeader = ({
  title,
  children,
  hasPadding = true,
  overflowY = true,
  heightFull = false,
  contentClassName = "",
  flip = false,
}) => {
  const { classToFlip } = useAppContext();
  const containerClass = classNames("per-page page-header-container", {
    "pl-5 pr-5 md:pl-8 md:pr-8": hasPadding,
    "h-full": heightFull,
    "page-container-flip": flip,
    
  });
  const headerClass = classNames("title-container pt-5 pb-4");
  const pageCoverClass = classNames("page-cover w-full flip", classToFlip)
  const pageContentClass = classNames(
    "page-content md:flex md:mb-10",
    contentClassName,
    {
      "overflow-y-scroll": overflowY,
    }
  );
  return (
    <div className={containerClass}>
      {/* FLIP */}
      <div className="wrapper h-full w-full absolute z-10"></div>
      <div className={pageCoverClass}></div>
      {title && (
        <div className={headerClass}>
          <h3>{title}</h3>
        </div>
      )}

      <div className={pageContentClass}>{children}</div>
    </div>
  );
};
