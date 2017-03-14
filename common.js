function logo(){
	return union(
	  difference(
		 cube({size: 3, center: true}),
		 sphere({r:2, center: true})
	  ),
	  intersection(
		  sphere({r: 1.3, center: true}),
		  cube({size: 2.1, center: true})
	  )
	)
}

function ordinates(size = 100){
	return union(
		cylinder({r: 0.1, h: size, center: true}).setColor(1,0,0).rotateX(90),
		cylinder({r: 0.1, h: size, center: true}).setColor(0,1,0).rotateY(90),
		cylinder({r: 0.1, h: size, center: true}).setColor(0,0,1)//.rotateZ(90)
	)
}


function section(high, width, topRound=7/8, bottomRound=3/4){
    var halfHigh=high/2;
    var halfWidth=width/2;
    var topFilletR=width*topRound/2;
    var bottomFilletR=width*bottomRound/2;
	var result = hull( 
		circle({r: bottomFilletR, center: true})
			.translate([0,-halfHigh+bottomFilletR,0]),
		circle({r: topFilletR, center: true})
			.translate([halfWidth-topFilletR, halfHigh-topFilletR,0]),
		circle({r: topFilletR, center: true})
			.translate([-halfWidth+topFilletR, halfHigh-topFilletR,0]) 
	)
    return linear_extrude(1, result);
	/*linear_extrude(1){
        hull(){
            //bottom fillet
            translate([0, -(halfHigh-(bottomFilletD/2))]){
                circle(d=bottomFilletD);
            }
            //right top fillet
            translate([(halfWidth-(topFilletD/2)), (halfHigh-(topFilletD/2))]){
                circle(d=topFilletD);
            }
            //left top fillet
            translate([-(halfWidth-(topFilletD/2)), (halfHigh-(topFilletD/2))]){
                circle(d=topFilletD);
            }
        }
    }*/
}