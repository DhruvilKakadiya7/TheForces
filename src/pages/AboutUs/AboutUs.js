import React from 'react'
import Container from "@mui/material/Container";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
export default function AboutUs() {

    return (
        <div>
            <Container>
                <div style={{ "textAlign": "center" }}>
                    <h3>
                        Empowering Competitive Programmers Community
                        <div>------------------------------------------------------------------</div>
                    </h3>
                </div>
                <Typography textAlign={"center"}>


                    <span>
                        It's where the ideas come out. TheForces is a project uniting individuals with a shared
                        interest in competitive programming contests. In essence, TheForces serves as a social
                        network dedicated to hosting The Challenging and Creative Problems Forces, a platform
                        currently conducting contests on{' '}
                        <Link to="http://codeforces.com" style={{ marginLeft: '3px' }}>
                            CodeForces
                        </Link>
                        . Participants' skills are showcased through their ratings on TheForces website. With
                        ongoing development, TheForces aims to enhance the community, empowering participants to
                        organize their own contests, propose interesting problems, and elevate their coding prowess.
                        Join us in fostering a vibrant community where ideas thrive.
                    </span>
                    <br />
                    <br />
                    <span>
                        Contact us for more business collaboration:{' '}
                        <Link href="mailto:amirhosseinfarhadi04@gmail.com">
                            amirhosseinfarhadi04@gmail.com
                        </Link>{' '}
                        (Head manager of theforces community)
                    </span>
                </Typography>

            </Container>

        </div>
    )
}
