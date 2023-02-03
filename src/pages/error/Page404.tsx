import { Button, Card, Stack } from '@shopify/polaris'

export const Page404 = () => {
  const domain = window.location.origin
  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <Card sectioned>
        <Stack>
          <Button plain onClick={() => (window.location.href = domain)}>
            404 : Page not found.Click to back to homepage
          </Button>
        </Stack>
      </Card>
    </div>
  )
}
