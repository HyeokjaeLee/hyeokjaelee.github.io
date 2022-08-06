declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
declare module "*.ico";
declare module "*.gif";

type Display = "hide" | "";
interface PortfolioOptions {
  isPortfolio: boolean;
  portfolioButtonShow: boolean;
}
type SetPortfolioOptions = Dispatch<SetStateAction<PortfolioOptions>>;
type SetDisplay = Dispatch<SetStateAction<"hide" | "">>;
