import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("GradesModel", schema);
export default model;
