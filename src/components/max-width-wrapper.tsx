


const MaxWidthWrapper = ({ children , className , wrapperClassName} : {children: React.ReactNode, className?: string, wrapperClassName?: string}) => {
  return (
    <div className={className}>
        <div className={`h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${wrapperClassName ? wrapperClassName : ''}`}>
            {children}
        </div>
    </div>
  )
}

export default MaxWidthWrapper
