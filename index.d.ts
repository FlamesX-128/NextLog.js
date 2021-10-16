declare module "@flamesx128/nextlog" {
  export type TypeLog = "ERR" | "OK" | "WARN";

  export = {
    /**
     * Print a console log with the status "ERR"
     * @param {any} message - Message to print.
     * @param {any[]} optionalParams - Optional params.
     * @returns {void} 
     */
    error: (message: any, ...optionalParams: any[]): void => buildTypeLog(
      "ERR", message,
      optionalParams
    ),


    /**
     * Print a console log with the status "OK"
     * @param {any} message - Message to print.
     * @param {any[]} optionalParams - Optional params.
     * @returns {void} 
     */
    ok: (message: any, ...optionalParams: any[]): void => buildTypeLog(
      "OK", message,
      optionalParams
    ),


    /**
     * Print a console log without a status.
     * @param {any} message - Message to print.
     * @param {any[]} optionalParams - Optional params.
     * @returns {void} 
     */
    print: (message: any, ...optionalParams: any[]): void => console.log(
      `${getCurrentTime().join(" ")} ${message}`,
      optionalParams.length ? optionalParams[0] : ""
    ),


    /**
     * Print a console log with the status "WARN"
     * @param {any} message - Message to print.
     * @param {any[]} optionalParams - Optional params.
     * @returns {void} 
     */
    warn: (message: any, ...optionalParams: any[]): void => buildTypeLog(
      "WARN", message,
      optionalParams
    )
  };
}