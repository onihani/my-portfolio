import { FC } from 'react'
import { classnames as cn } from '@/common/helpers'
import { ArrowRight, Home } from 'lucide-react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  transparent?: boolean
  icon?: 'arrow' | 'home'
  iconPosition?: 'left' | 'right'
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  transparent = false,
  icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  const variantClasses = {
    primary: transparent
      ? 'bg-gradient-to-br from-coral/40 to-coral/30 border-coral/20 text-background'
      : 'bg-coral text-background border-coral',
    secondary: transparent
      ? 'bg-gradient-to-br from-secondary/40 to-secondary/30 border-secondary/20 text-foreground'
      : 'bg-secondary text-foreground border-secondary',
    accent: transparent
      ? 'bg-gradient-to-br from-accent/40 to-accent/30 border-accent/20 text-background'
      : 'bg-accent text-background border-accent',
    ghost: transparent
      ? 'bg-transparent border-accent/50 text-foreground'
      : 'bg-transparent border-accent text-foreground',
  }

  const IconComponent = icon === 'arrow' ? ArrowRight : icon === 'home' ? Home : null

  const beforeClasses = transparent
    ? `before:bg-gradient-to-br ${
        variant === 'primary'
          ? 'before:from-coral/10'
          : variant === 'secondary'
          ? 'before:from-secondary/10'
          : variant === 'accent'
          ? 'before:from-accent/10'
          : 'before:from-accent/5'
      } before:to-transparent`
    : 'before:from-transparent before:to-transparent'

  return (
    <button
      className={cn(
        'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
        'backdrop-blur-md backdrop-saturate-150',
        'text-sm lg:text-base',
        'transition-all duration-300',
        'border',
        'shadow-[0_0_15px_rgba(0,0,0,0.1)]',
        'hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]',
        'relative',
        'before:absolute before:inset-0',
        'before:rounded-lg before:opacity-0',
        'before:transition-opacity',
        'hover:before:opacity-100',
        variantClasses[variant],
        beforeClasses,
        className
      )}
      {...props}
    >
      {IconComponent && iconPosition === 'left' && (
        <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />
      )}
      <span className="relative z-10">{children}</span>
      {IconComponent && iconPosition === 'right' && (
        <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />
      )}
    </button>
  )
}

export default Button
