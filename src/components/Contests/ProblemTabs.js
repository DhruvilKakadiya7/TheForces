import * as React from "react";
// import ReactMarkdown from "markdown-to-jsx";
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { MathJax, MathJaxContext } from "better-react-mathjax";
// import { Typography, Box, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Box, Typography } from "@mui/material";
// import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";


const InlineEquation = (props) => {
    return (
        <InlineMath  {...props} />
    )
};

const BlockEquation = (props) => {
    return (
        <BlockMath  {...props} />
    )
};

const BlockCode = ({ children, className }) => {
    const language = className ? className.replace('language-', '') : 'cpp';

    return (
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
            {children?.props?.children}
        </SyntaxHighlighter>
    );
};

const BreakLiner = () => {
    return (
        <br></br>
    )
};

const options = {
    overrides: {
        math: {
            component: BlockEquation,
        },
        inlineMath: {
            component: InlineEquation,
        },
        h1: {
            component: Box,
            props: { fontSize: '2rem', fontWeight: '800' }
        },
        h2: {
            component: Box,
            props: { fontSize: '1.3rem', fontWeight: '600', my: '1' }
        },
        p: {
            component: Box,
            props: { fontSize: '1.2rem', as: 'div' }
        },
        li: {
            component: Box,
            props: { fontSize: '1.2rem', as: 'li' }
        },
        br: {
            component: BreakLiner,
        },
    },
};

const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
        packages: { "[+]": ["html"] },
        inlineMath: [
            ["$", "$"],
        ],
        displayMath: [
            ["$$", "$$"],
        ],
        math: [
            ["$$", "$$"],
        ]
    }
};

export default function Problem({ problem, mathJaxRendered, onMathJaxRendered }) {
    console.log(problem);
    let problemStatement = problem?.problemStatement;
    problemStatement = problemStatement?.replace(/\$\$\(/g, '$$');
    problemStatement = problemStatement?.replace(/\$\(/g, '$');
    problemStatement = problemStatement?.replace(/\)\$/g, '$');
    problemStatement = problemStatement?.replace(/\)\$\$/g, '$$');

    let problemInput = problem?.problemInput;
    problemInput = problemInput?.replace(/\$\$\(/g, '$$');
    problemInput = problemInput?.replace(/\$\(/g, '$');
    problemInput = problemInput?.replace(/\)\$/g, '$');
    problemInput = problemInput?.replace(/\)\$\$/g, '$$');

    let problemOutput = problem?.problemOutput;
    problemOutput = problemOutput?.replace(/\$\$\(/g, '$$');
    problemOutput = problemOutput?.replace(/\$\(/g, '$');
    problemOutput = problemOutput?.replace(/\)\$/g, '$');
    problemOutput = problemOutput?.replace(/\)\$\$/g, '$$');

    let problemNote = problem?.problemNote;
    problemNote = problemNote?.replace(/\$\$\(/g, '$$');
    problemNote = problemNote?.replace(/\$\(/g, '$');
    problemNote = problemNote?.replace(/\)\$/g, '$');
    problemNote = problemNote?.replace(/\)\$\$/g, '$$');

    let problemTestCase = problem?.problemTestCases;
    // console.log(xx);
    useEffect(() => {
        if (!mathJaxRendered && document.querySelector(".MathJaxEnd")) {
            onMathJaxRendered();
        }
    }, [mathJaxRendered]);

    return (
        <MathJaxContext config={config}>
            <MathJax>
                <Box fontSize={'1.5rem'} fontWeight={700} textAlign={'center'}>
                    {/* {`${String.fromCharCode(65 + idx)}. ${problem?.name}`} */}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: problem?.problemName
                        }}
                    ></div>
                </Box>
                <Box fontWeight={550} textAlign={'center'}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: problem?.problemTimeLimit.replace('time limit per test', 'time limit per test: ')
                        }}
                    >
                    </div>
                </Box>
                <Box fontWeight={550} textAlign={'center'}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: problem?.problemMemoryLimit.replace('memory limit per test', 'memory limit per test: ')
                        }}
                    >
                    </div>
                </Box>
                <div
                    className="MathJaxEnd"
                    style={{ marginTop: '1em' }}
                    dangerouslySetInnerHTML={{
                        __html: problemStatement
                    }}
                >
                </div>
                <Typography fontWeight={700} fontSize={'1.3rem'} marginTop={1}>
                    Input
                </Typography>
                <div
                    className="MathJaxEnd"
                    dangerouslySetInnerHTML={{
                        __html: problemInput
                    }}
                >
                </div>
                <Typography fontWeight={700} fontSize={'1.3rem'} marginTop={1}>
                    Output
                </Typography>
                <div
                    className="MathJaxEnd"
                    dangerouslySetInnerHTML={{
                        __html: problemOutput
                    }}
                >
                </div>
                <div
                    className="MathJaxEnd"
                    dangerouslySetInnerHTML={{
                        __html: problemTestCase
                    }}
                >
                </div>
                <div
                    className="MathJaxEnd"
                    dangerouslySetInnerHTML={{
                        __html: problemNote
                    }}
                >
                </div>
            </MathJax>
        </MathJaxContext>
    );
}