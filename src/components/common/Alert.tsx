export type AlertType = 'success' | 'danger' | 'warning'

export type AlertProps = {
  message: string,
  type: AlertType
}

export const Alert = ({message, type}: AlertProps) => {
  const backgroundColor = {
    success: 'bg-green-50',
    danger: 'bg-red-50',
    warning: 'bg-yellow-50',
  }

  return (
    <div className={`${backgroundColor[type]} text-${type}-700 p-4 rounded-md`}>
        {message}
    </div>
  )
}