/**
 * Description: The point-in-polygon algorithm allows you to check if a point is
 * inside a polygon or outside of it.
 *
 * min lat and the following arguments are optional and will double the search speed by filtering out all records not in the general vecity
 * min and max range is usually provided with the polygon in kml files
 *
 * Original Author: Michaël Niessen (2009)
 * Author of changes: Daniel Brenot (2018)
 * Website: http://AssemblySys.com
 * Source: http://assemblysys.com/php-point-in-polygon-algorithm/
 *
 * @param point An array of 2 numbers, x and y (eg. [5, 7])
 * @param vertices an array of arrays that have coordinates(for example [[1,2][2,3][3,4][-1,2][-3,1][1,6]])
 * @param usePointOnVertex Whether the algorithm should search and check if the point lies on a vertex
 * @param minX An optional field to specify the minimum x coordinate of the point
 * @param maxX An optional field to specify the maximum x coordinate of the point
 * @param minY An optional field to specify the minimum y coordinate of the point
 * @param maxY An optional field to specify the maximum y coordinate of the point
 * @returns A string value representing where the point lies on a polygon(vertex, boundary, inside, outside)
*/
export default function pointInPolygon(point: number[], vertices: number[][], usePointOnVertex: boolean, minX?: number, maxX?: number, minY?: number, maxY?: number): string;
/** Simply compares a vertex to an array of vertices to see if it matches any
 * @param point An array of two numbers (the x and y coordinate)
 * @param verticies An array of verticies each stored as 2 numbers(x and y)
 * @returns True if the point lies on a vertex, false otherwise
*/
export declare function pointOnVertex(point: number[], vertices: number[][]): boolean;
