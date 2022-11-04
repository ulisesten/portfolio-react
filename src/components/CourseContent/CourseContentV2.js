import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import { course_content_url } from '../../data/urls';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-seaside-dark';
import ContentPresenter from '../../Utils/ContentPresenter';

/** Icons */
import Public from '@mui/icons-material/Public';
import Download from '@mui/icons-material/Download'

export default function CourseContentV2({rootTopicState, setRootTopicState, setRootCourseId}) {
    const [ content, setContent ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {

        populateContentData();

    }, [rootTopicState]);

    const populateContentData = async () => {
        setLoading(true);
        const url = course_content_url + (rootTopicState? rootTopicState.id : "c01_topic01");

        const response = await fetch(url);
        const data = await response.json();

        setContent(data.result);
        setLoading(false);
        setRootCourseId(data.result? data.result.courseID : null);
    }

    return (
        <div className='course-content-container col-6 place-6'>
                <div className='course-content'>
                    {
                        content? (
                            <>
                                <h3>{content.title}</h3>
                                    <div className='course-content-child'> {   
                                        (new ContentPresenter(content.content))
                                        .presentContent().map(
                                            (el, index) => (
                                                <div key={index}>{el.type == "text"? (<p>{el.content}</p>) : (<SyntaxHighlighter style={style} language="c" showLineNumbers={true}>{el.content}</SyntaxHighlighter>)}</div>
                                            )
                                        )
                                }
                                </div>

                                <div className="course-content-toolbar">
                                    <Public className="icon" />
                                    <Download className="icon" />
                                </div>
                            </>
                        ) : (
                            <>
                                <h3>¡Bienvenido!</h3>
                                <p>Elije uno de los cursos a tu izquierda y comienza a aprender.</p>
                            </>
                        )
                    }
                </div>
            </div>
    )
}