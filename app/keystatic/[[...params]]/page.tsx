import { makePage } from "@keystatic/next/ui/app";
import keystaticConfig from "../../../keystatic.config";

/* The content editing UI, served at /keystatic. Local-mode: writes directly
   to the content/ files on disk, so it only works when running locally
   (npm run dev) — the deployed site serves content baked in at build time. */

export default makePage(keystaticConfig);
