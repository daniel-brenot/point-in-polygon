'use strict'
/*
Ported to typescript by Daniel Brenot (2018)

If you find this script useful, you can show your
appreciation by getting Michaël a cup of coffee ;)
PayPal: michael.niessen@assemblysys.com

As long as this notice (including author name and details) is included and
UNALTERED, this code is licensed under the GNU General Public License version 3:
http://www.gnu.org/licenses/gpl.html
*/

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
export default function pointInPolygon(point: number[], vertices: number[][],usePointOnVertex:boolean, minX?:number, maxX?:number,minY?:number,maxY?:number): string {
    //Checks if the point is in the basic boundary. Saves on procssing power
    if(usePointOnVertex==undefined)usePointOnVertex=true;
    if(minX&&maxX&&minY&&maxY){
        if(point[0]<minX || point[0]>maxX || point[1]<minY|| point[1]>maxY){
            return 'outside';
        }
    }
    //Checks if the point lies on a vertex
    if (usePointOnVertex && pointOnVertex(point, vertices) == true) {
        return 'vertex';
    }

    let intersections = 0;
    for (let i = 1; i < vertices.length; i++) {
        let vertex1: number[] = vertices[i - 1];
        let vertex2: number[] = vertices[i];
        // Check if point is on an horizontal polygon boundary
        if (vertex1[1] == vertex2[1] && vertex1[1] == point[1] && point[0] > Math.min(vertex1[0], vertex2[0]) && point[0] < Math.max(vertex1[0], vertex2[0])) {
            return 'boundary';
        }

        if (point[1] > Math.min(vertex1[1], vertex2[1]) && point[1] <= Math.max(vertex1[1], vertex2[1]) && point[0] <= Math.max(vertex1[0], vertex2[0]) && vertex1[1] != vertex2[1]) {
            var xinters = (point[1] - vertex1[1]) * (vertex2[0] - vertex1[0]) / (vertex2[1] - vertex1[1]) + vertex1[0];
            // Check if point is on the polygon boundary (other than horizontal)
            if (xinters == point[0]) {
                return 'boundary';
            }
            if (vertex1[0] == vertex2[0] || point[0] <= xinters) {
                intersections++;
            }
        }
    }

    if (intersections % 2 != 0) {
        return 'inside';
    } else {
        return 'outside';
    }
}

/** Simply compares a vertex to an array of vertices to see if it matches any 
 * @param point An array of two numbers (the x and y coordinate)
 * @param verticies An array of verticies each stored as 2 numbers(x and y)
 * @returns True if the point lies on a vertex, false otherwise
*/
export function pointOnVertex(point: number[], vertices: number[][]): boolean {
    for (let vertex of vertices) {
        if (point[0] == vertex[0] && point[1] == vertex[1]) {
            return true
        }
    }
    return false;
}