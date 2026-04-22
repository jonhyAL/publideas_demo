import { motion } from 'framer-motion'

export default function AnimatedButton({
  children,
  onClick,
  href,
  variant = 'primary', // 'primary' | 'outline' | 'ghost'
  className = '',
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 select-none'

  const variants = {
    primary:
      'bg-[#2B2B2B] text-[#F6F1E8] hover:bg-[#E53935] hover:text-white shadow-md',
    outline:
      'border-2 border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#F6F1E8]',
    ghost: 'text-[#2B2B2B] hover:text-[#E53935]',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-md',
  }

  const cls = `${base} ${variants[variant] || variants.primary} ${className}`

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  }

  if (href) {
    return (
      <motion.a href={href} className={cls} {...motionProps} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={cls} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
