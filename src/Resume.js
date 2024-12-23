import * as React from "react";
import Card from "@mui/material/Card";
import "./resume.css";

export default function ResumeCard() {
    return (
        <div className="resume">
            <Card sx={{ height: '100%', width: '60%', }}>
                <div className='content'>
                    <iframe src="./Resume - Web.pdf" width="100%" title="resume" className="pdf"></iframe>
                </div>
            </Card>
        </div>
    );
  }