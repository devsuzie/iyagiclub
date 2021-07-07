import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return <div className="container mx-auto px-6" style={{ WebkitTapHighlightColor: 'rgba(255,255,255,0)' }}>{children}</div>
}

export default Container
