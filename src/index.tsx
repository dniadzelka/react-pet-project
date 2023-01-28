import { createRoot } from 'react-dom/client';
import {App} from "./components/App";
import React from "react";

const container = document.getElementById('root');
const root = createRoot(container!); // operator ! means not nullable
root.render(<App />);