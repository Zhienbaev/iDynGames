import { Stack, Typography } from "@mui/material";


export default function page() {
    return (
        <Stack spacing={3} sx={{fontWeight: 'bold'}}>
            <Typography fontSize={'20px'} color="#008000" fontWeight='bold'>
                Applications published on idosgames.com use the service for FREE.
            </Typography>
            <Stack>
                <Typography fontWeight='bold'>
                    Pricing for other platforms:
                </Typography>
                <Typography fontWeight='bold'>
                    Pay as you go:<br/>
                    $0.015 / 1 000 API request<br/>
                    $0.1 / 1 GB Cloud storage with CDN<br/>
                    <br/>
                    Monthly Free Tier:<br/>
                    30 000 API request<br/>
                    100 MB Cloud storage with CDN<br/>
                </Typography>
            </Stack>
        </Stack>
    )
}
