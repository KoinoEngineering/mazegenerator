export class MyConsole {
  public static assert(condition?: boolean | undefined, message?: string | undefined, ...data: any[]) {
    if (process.env.NODE_ENV !== "production") { console.assert(condition, message, ...data) }
  }
  public static clear() {
    if (process.env.NODE_ENV !== "production") { console.clear() }
  }
  public static count(label?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.count(label) }
  }
  public static debug(message?: any, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.debug(message, ...optionalParams) }
  }
  public static dir(value?: any, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.dir(value, ...optionalParams) }
  }
  public static dirxml(value: any) {
    if (process.env.NODE_ENV !== "production") { console.dirxml(value) }
  }
  public static error(message?: any, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.error(message, ...optionalParams) }
  }
  public static exception(message?: string | undefined, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.exception(message, ...optionalParams) }
  }
  public static group(groupTitle?: string | undefined, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.group(groupTitle, ...optionalParams) }
  }
  public static groupCollapsed(groupTitle?: string | undefined, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.groupCollapsed(groupTitle, ...optionalParams) }
  }
  public static groupEnd() {
    if (process.env.NODE_ENV !== "production") { console.groupEnd() }
  }
  public static info(message?: any, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.info(message, ...optionalParams) }
  }
  public static log(message?: any, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.log(message, ...optionalParams) }
  }
  public static markTimeline(label?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.markTimeline(label) }
  }
  public static profile(reportName?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.profile(reportName) }
  }
  public static profileEnd(reportName?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.profileEnd(reportName) }
  }
  public static table(...tabularData: any[]) {
    if (process.env.NODE_ENV !== "production") { console.table(...tabularData) }
  }
  public static time(label?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.time(label) }
  }
  public static timeEnd(label?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.timeEnd(label) }
  }
  public static timeStamp(label?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.timeStamp(label) }
  }
  public static timeline(label?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.timeline(label) }
  }
  public static timelineEnd(label?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.timelineEnd(label) }
  }
  public static trace(message?: any, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.trace(message, ...optionalParams) }
  }
  public static warn(message?: any, ...optionalParams: any[]) {
    if (process.env.NODE_ENV !== "production") { console.warn(message, ...optionalParams) }
  }
  public static countReset(label?: string | undefined) {
    if (process.env.NODE_ENV !== "production") { console.countReset(label) }
  }
  public static timeLog(label?: string | undefined, ...data: any[]) {
    if (process.env.NODE_ENV !== "production") { console.timeLog(label) }
  }
}