interface IPageLayout {
  children: any;
  className?: string;
}

export default function PageLayout( { children, className = '' }: IPageLayout) {
  return (
    <main className={`${className}`}>
        {children}
    </main>
  )
}
