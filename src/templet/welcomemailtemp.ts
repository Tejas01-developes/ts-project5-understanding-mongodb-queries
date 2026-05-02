import { temp1 } from "../types/templettype.js";

export const welcometemplate=(data:temp1)=>({
html:
  `<div>
  <h1>Welcome ${data.name}</h1>
  <h2>your userid is ${data.userid}</h2>
  </div>`

})