import {Grid, Typography} from "@mui/material";
import {move_window, Position} from 'tauri-plugin-positioner-api'
import {useEffect, useState} from "react";
import {grey} from "@mui/material/colors";


const getDatetime = (datetime: Date): string => {
    return `${String(datetime.getHours()).padStart(2, "0")}:`
        + `${String(datetime.getMinutes()).padStart(2, "0")}:`
        + `${String(datetime.getSeconds()).padStart(2, "0")}`;
}

function App() {

    const [datetime, setDatetime] = useState(new Date());
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState<Position>(Position.BottomRight);


    useEffect(() => {
        setInterval(() => {
            setDatetime(new Date());
        }, 500);
    }, [])

    useEffect(() => {
        move_window(position);
    }, [position]);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item onClick={() => {
                        setPosition(Position.TopLeft);
                    }}>
                        <div style={{width: 8, height: 8, backgroundColor: grey[700]}}></div>
                    </Grid>
                    <Grid item onClick={() => {
                        setPosition(Position.TopCenter);
                    }}>
                        <div style={{width: 104, height: 4, backgroundColor: grey[800]}}></div>
                    </Grid>
                    <Grid item onClick={() => {
                        setPosition(Position.TopRight);
                    }}>
                        <div style={{width: 8, height: 8, backgroundColor: grey[700]}}></div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems="center">
                    <Grid item onClick={() => {
                        setPosition(Position.LeftCenter);
                    }}>
                        <div style={{width: 4, height: 16, backgroundColor: grey[800]}}></div>

                    </Grid>
                    <Grid item onClick={() => {
                        setPosition(Position.Center);
                    }}>
                        <Typography style={{fontSize: 12, width: 112, cursor: "default"}} align="center">
                            {getDatetime(datetime)}
                        </Typography>
                    </Grid>
                    <Grid item onClick={() => {
                        setPosition(Position.RightCenter);
                    }}>
                        <div style={{width: 4, height: 16, backgroundColor: grey[800]}}></div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems="flex-end">
                    <Grid item onClick={() => {
                        setPosition(Position.BottomLeft);
                    }}>
                        <div style={{width: 8, height: 8, backgroundColor: grey[700]}}></div>

                    </Grid>
                    <Grid item onClick={() => {
                        setPosition(Position.BottomCenter);
                    }}>
                        <div style={{width: 104, height: 4, backgroundColor: grey[800]}}></div>
                    </Grid>
                    <Grid item onClick={() => {
                        setPosition(Position.BottomRight);
                    }}>
                        <div style={{width: 8, height: 8, backgroundColor: grey[700]}}></div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;
