"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// .server/server.ts
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 5173;
// Assuming your public folder is at the root level of your project
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
