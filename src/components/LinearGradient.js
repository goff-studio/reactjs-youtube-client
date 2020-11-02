import React from "react";

export function LinearGradient(props){

        const {colors,angel="to bottom",style={marginTop:0}} = props;
        let colorNames = angel;
        colors.map(color=>{
            colorNames = colorNames+','+color;
            return false;
        });
        const styleBg = 'linear-gradient('+colorNames+')';
        return(
            <div style={{...style,background:styleBg}}>
                {props.children}
            </div>
        )
}