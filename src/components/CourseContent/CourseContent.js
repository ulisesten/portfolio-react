import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class CourseContent extends Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            code: true,
        }
    }

    render(){
        let stringcode = `#include <stdio.h>
        int main()
        {}`;

        let handleCode = this.state.code? (
           
            <SyntaxHighlighter language="javascript" style={dark}>
                {stringcode}
            </SyntaxHighlighter>
            
        ) : (
            
            <>No code example</>
            
        );

        let renderContent = (
            <div className='course-content col-5 place-7'>
                {handleCode}
            </div>
        )

        return renderContent;
        
    }
}