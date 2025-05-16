'use client';
import { getClients } from '@/utils/getClients';
import { Client } from '@/types/client';
import { useEffect, useState } from 'react'
import ClientSearchForm from '@/components/ClientSearchForm';
import ClientTable from '@/components/ClientTable';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export default function ClientsPage() {
  const [params, setParams] = useState<Record<string, string>>({})
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getClients(params)
        setClients(data)
      } catch (err) {
        setError('Failed to fetch clients')
        console.error('Error fetching clients:', err)
      }
      finally{
        setLoading(false)
      }
    }
    fetchClients()
  }, [params])

  return (
    <Box
      sx={{
        bgcolor: 'common.white',
        height: '1080px',
        width: '1440px',
      }}
    >
      <ClientSearchForm onSearch={setParams} />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Error loading clients: {error.message}
        </Alert>
      )}

      {(loading) ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Box>
      ) : (
        <ClientTable data={clients || []} />
      )}
    </Box>
  );
}
