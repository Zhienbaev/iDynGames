import BalanceHeader from "@/components/balance/BalanceHeader";
import { Stack } from "@mui/material";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack spacing={3}>
      <Stack width={'100%'}>
        <BalanceHeader/>
      </Stack >
        <Stack bgcolor={'#white'} sx={{height: '100%' , padding: "40px",
            boxShadow: "0 0 2px rgba(120, 120, 120, 0.5)",
            bgcolor: 'white',
            borderRadius: '6px'
        
        }}>
          {children}
        </Stack>
    </Stack>

  );
}
