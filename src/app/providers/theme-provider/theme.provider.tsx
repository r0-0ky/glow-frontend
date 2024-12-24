import { ConfigProvider } from "antd"

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ec6b15',
        },
        components: {
          Button: {
            borderRadius: 0,
            colorBorder: '#131313',
            lineWidth: 2,
            colorText: '#ec6b15',
            defaultHoverBorderColor: '#131313',
            defaultHoverBg: 'transparent',
          },
          Input: {
            borderRadius: 0,
            colorBorder: '#131313',
            lineWidth: 2,
            hoverBorderColor: '#131313',
            activeBorderColor: '#131313'
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}