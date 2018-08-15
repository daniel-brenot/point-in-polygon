# Point in polygon
Detects is a given point is in a given polygon. Based off of http://assemblysys.com/php-point-in-polygon-algorithm/


# [Documentation](https://github.com/daniel-brenot/point-in-polygon)

## Getting Started
### Installation
- The Point in polygon package is published on the [npm](https://www.npmjs.com/package/point-in-polygon) Registry. 
- Install the package :
    `npm install assemblysys-point-in-polygon`


### Usage
Import `assemblysys-point-in-polygon` into any files that depend on the function
```js
import * as pointInPolygon from 'assemblysys-point-in-polygon';

```

Call the function anywhere you want to use it

```js

import * as pointInPolygon from 'assemblysys-point-in-polygon';

let polygon = [[0,0],[4,0],[4,4],[0,4]];

let result1 = pointInPolygon([1,1],polygon);//Should return inside
let result2 = pointInPolygon([1,5],polygon);//Should return outside
let result3 = pointInPolygon([0,3],polygon);//should return boundary
let result4 = pointInPolygon([0,0],polygon);//Should return vertex
let result4 = pointInPolygon([0,0],polygon,false);//Should return outside


```

You can also optionally specify the minimum and maximum x and y coordinates for the polygon to speed up mass processing
```js
let polygon = [[0,0],[4,0],[4,4],[0,4]];
let result4 = pointInPolygon([5,5],polygon,true,0,4,0,4);//Should return outside
```

## License
LGPL-3.0 License.