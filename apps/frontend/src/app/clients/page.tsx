'use client';
import { getClients } from '@/utils/getClients';
import { Client } from '@/types/client';
import { useEffect, useState } from 'react'
import ClientSearchForm from '@/components/ClientSearchForm';
import ClientTable from '@/components/ClientTable';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { ERROR_LOADING_CLIENTS } from '@/constants/Constants';
import { alertStyles,PageContainer,loaderStyles,loaderContainerStyles } from '@/styles/ClientsPage.styles';

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
    <PageContainer>
      <ClientSearchForm onSearch={setParams} />

      {error && (
        <Alert severity="error" sx={alertStyles}>
          {ERROR_LOADING_CLIENTS}: {error}
        </Alert>
      )}

      {(loading) ? (
        <Box sx={loaderContainerStyles}>
          <CircularProgress
            sx={loaderStyles}/>
        </Box>
      ) : (
        <ClientTable data={clients || []} />
      )}
    </PageContainer>
  );
}
