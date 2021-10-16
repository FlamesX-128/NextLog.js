import { green, grey, red, yellow } from "chalk";


type TypeLog = "ERR" | "OK" | "WARN";


const validLogs = {
  "ERR": red,
  "OK": green,
  "WARN": yellow
};


/**
 * Get current time.
 * @returns {[string, string]}
 */
const getCurrentTime = (): [string, string] => {
  const date = new Date();

  return [
    buildClosers(
      `${date.toLocaleDateString()}`
    ),

    buildClosers(
      `${date.toLocaleTimeString()}`
    )
  ]
}


/**
 * Gets current status.
 * @param {TypeLog} type
 * @returns {string}
 */
const getCurrentStatus = (type: TypeLog): string => buildClosers(
  validLogs[type](type)
);


/**
 * Add brackets to the string.
 * @param {string} str - Value to add brackets.
 * @returns {string}
 */
const buildClosers = (str: string): string => grey("[") + str + grey("]");


/**
 * 
 * @param {TypeLog} type - Status type.
 * @param {any} message - Message to print.
 * @param {any[]} optionalParams - Optional params.
 * @returns {void}
 */
const buildTypeLog = (type: TypeLog, message: any, ...optionalParams: any[]): void => {
  console.log(
    `${getCurrentTime().join(" ")} ${getCurrentStatus(type)} ${message}`,
    optionalParams[0].length ? optionalParams[0] : ""
  )
};


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