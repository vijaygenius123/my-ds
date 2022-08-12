import React from "react";
import {createRoot} from "react-dom/client";

import {Button} from "@vijaygenius123/react"
import "@vijaygenius123/scss/lib/Button.css"

const root = createRoot(document.getElementById('root')!)
root.render(<Button label={"Hello"}/>)
