// export const title = {
//     'background-color': 'black',
//     height: '100px',
//     color: 'white',
//     'font-size': '38px',
//     padding: 20
// }

const defaultPadding = 10
const div1Width = 200

export const simpleBorder = {
    border: 2,
    borderColor: 'gray',
    borderStyle: 'solid'
}

export const simpleBorderColumn = {
    border: 2,
    borderColor: 'red',
    borderStyle: 'solid'
}


export const div1 = {
    width: div1Width,
   
    position: 'absolute',
    top: defaultPadding,
    left: defaultPadding,
    bottom: defaultPadding,
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}
export const div2 = {
   
    position: 'absolute',
    top: defaultPadding,
    left: div1Width + defaultPadding,
    right: defaultPadding,
    bottom: defaultPadding,
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}

export const leftCol = {
    width:300,
    height:500,
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}

export const mainGrid = {
    width: '100%', 
    
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
} 
export const innerGrid = {
  //  width: '100%',
    height: '100%',
    
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}
export const profilePic = {
    width: 200,
    height: 200,
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}
export const leftNav = {
    height: 500,
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}
export const header = {
    height: 150,
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}
export const mainContentWrapper = {
    height: 550,
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}
export const mainContent = {
    height: '100%',
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}
export const rightNav = {
    height: '100%',
    border: simpleBorder.border,
    borderColor: simpleBorder.borderColor,
    borderStyle: simpleBorder.borderStyle
}

export const test = {

    background: 'yellow',

}


// const defaultPadding = 10

// const picHeight = 240
// const picWidth = 240
// const titleHeight = picHeight

// const topWidth = '100%'
// const topHeight = picHeight + defaultPadding + defaultPadding

// const contentWidth = '100%'

// const leftContentVisibility = 'visible'
// const leftContentWidth = () => {
//     if (leftContentVisibility == 'hidden')
//         return defaultPadding * -1
//     else
//         return 240
// }

// const rightContentVisibility = 'visible'
// const rightContentWidth = () => {
//     if (rightContentVisibility == 'hidden')
//         return defaultPadding * -1
//     else
//         return 240
// }


// // fix top left edges and set width and height, width is 100% of container
// export const top = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: topWidth,
//     height: topHeight,

//     border: simpleBorder.border,
//     borderColor: simpleBorder.borderColor,
//     borderStyle: simpleBorder.borderStyle
// }

// // fix the top left corner and set the width
// export const pic = {
//     position: 'absolute',
//     top: defaultPadding,
//     left: defaultPadding,
//     width: picWidth,
//     height: picHeight,
//     overflow: 'scroll',

//     border: innerBorder.border,
//     borderColor: innerBorder.borderColor,
//     borderStyle: innerBorder.borderStyle
// }

// // fix the left top and right edges and the width will automatically be set
// export const title = {
//     position: 'absolute',
//     top: defaultPadding,
//     left: picWidth + defaultPadding + defaultPadding,
//     right: defaultPadding,
//     height: titleHeight,

//     border: innerBorder.border,
//     borderColor: innerBorder.borderColor,
//     borderStyle: innerBorder.borderStyle
// }

// // fix top left and bottom edges and set width to 100%
// export const content = {
//     position: 'absolute',
//     top: topHeight + defaultPadding,
//     left: 0,
//     bottom: 0,
//     width: contentWidth,
   

//     border: simpleBorder.border,
//     borderColor: simpleBorder.borderColor,
//     borderStyle: simpleBorder.borderStyle
// }

// // fix the top left and bottom edges and set the width
// export const leftContent = {
//     visibility: leftContentVisibility,
//     position: 'absolute',
//     top: defaultPadding,
//     left: defaultPadding,
//     bottom: defaultPadding,
//     width: leftContentWidth(),
    

//     border: innerBorder.border,
//     borderColor: innerBorder.borderColor,
//     borderStyle: innerBorder.borderStyle
// }

// // fix all edges and width and height will be automatic 
// export const middleContent = {
//     position: 'absolute',
//     top: defaultPadding,
//     left: leftContentWidth() + defaultPadding + defaultPadding,
//     bottom: defaultPadding,
//     right: rightContentWidth() + defaultPadding + defaultPadding,
    

//     border: innerBorder.border,
//     borderColor: innerBorder.borderColor,
//     borderStyle: innerBorder.borderStyle
// }

// // fix the top right and bottom edges and the width will automatically be set
// export const rightContent = {
//     visibility: rightContentVisibility,
//     position: 'absolute',
//     top: defaultPadding,
//     right: defaultPadding,
//     bottom: defaultPadding,
//     width: rightContentWidth(),
    
//     border: innerBorder.border,
//     borderColor: innerBorder.borderColor,
//     borderStyle: innerBorder.borderStyle
// }

// export const profilePic = {
//     position: 'absolute',
//     top: 0,
//     left: 0
// }

// export const navItem = {
//     fontSize: 22,
//     height: 60
// }

// export const mainDiv = {
//     width: '100%',
//     height: '700',
//     position: 'absolute',
//     margin: 'auto',

//     border: innerBorder.border,
//     borderColor: innerBorder.borderColor,
//     borderStyle: innerBorder.borderStyle
// }
