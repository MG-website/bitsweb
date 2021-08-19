const themeLight = {
    typography: {
        fontFamily: [
            'acumin-pro', 
            'BlinkMacSystemFont', 
            'sans-serif', 
            'Monserrat', 
            'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    palette:{
        type: 'light',
        primary:{
            main:'#e92727',
            backGround:'#F1F1F1'
        },
        secondary:{
            main:'#f7f7f8'
        },
        terciary:{
            main:'#d9e510'
        },
        grey:{
            100:'#c0c0c0',
            900:'#7a7a7a'
        },
    },
//   SubTitle:{
//       main:'#0000ff'
//   },
//   spacing:(spacing)=>{
//     return spacing
//   }
}

export default themeLight