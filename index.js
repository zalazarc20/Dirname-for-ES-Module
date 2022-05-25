import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const path = dirname(__filename);

let __dirname = path.slice(0, -32)
export {__dirname};
