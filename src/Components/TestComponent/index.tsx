import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react"
import searchSong from "../../services/Spotify/searchSong";

const TestComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [dataRetrieved, setdataRetrieved] = useState(false);
    const [trackResponse, setTrackResponse] = useState('');
    var tracks: any = {};
    var [rows, setRows] = useState([{}]);
    // var client_id = process.env.SPOTIFY_CLIENT_ID;
    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchTerm(event.currentTarget.value);



    }
    const handleSearchClick = async () => {
        if (searchTerm !== '') {
            setTrackResponse(JSON.stringify(await searchSong({ searchTerm })));

        }
    };

    useEffect(() => {
        if (trackResponse !== '') {
            tracks = (JSON.parse(trackResponse).tracks.items);
            console.log(tracks);
            // console.log(tracks);
            //create table rows
            var temprows = [];
            for (var i = 0; i <= tracks.length - 1; i++) {
                temprows[i] = createData(i, tracks[i].name, tracks[i].album.name, tracks[i].artists[0].name)

            }

            setRows(temprows
            );

            setdataRetrieved(true);
            console.log(rows);
        }

    }, [trackResponse]);

    function createData(
        id: number,
        songName: string,
        songAlbum: string,
        songArtist: string,
    ) {
        return { id, songName, songAlbum, songArtist };
    }

    return (
        <>
            <input onChange={handleInput} type="text" ></input >
            <button onClick={handleSearchClick}>Search Song</button>
            {dataRetrieved === true ?
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>

                                <TableCell>Song</TableCell>
                                <TableCell align="right" >Album</TableCell>
                                <TableCell align="right">Artist</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row: any) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.songName}
                                    </TableCell>


                                    <TableCell align="right">{row.songAlbum}</TableCell>
                                    <TableCell align="right">{row.songArtist}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> :
                null

            }
        </>
    )
};

export default TestComponent;