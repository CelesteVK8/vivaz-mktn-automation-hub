
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated Vivaz MKTN colors
				vivaz: {
					purple: {
						DEFAULT: '#6e0c9e',
						dark: '#1a032d',
						light: '#9b4fd3'
					},
					metallic: '#c0c0c0',
					dark: '#121212', // New dark background color
					accent: '#ff56ee'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '20px'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				sora: ['Sora', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
			},
			boxShadow: {
				'neon': '0 0 5px rgba(110, 12, 158, 0.7), 0 0 20px rgba(110, 12, 158, 0.3)',
				'card': '0 10px 30px rgba(0, 0, 0, 0.2), 0 1px 8px rgba(0, 0, 0, 0.3)',
				'button': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.15)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px rgba(110, 12, 158, 0.3), 0 0 20px rgba(110, 12, 158, 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 15px rgba(110, 12, 158, 0.6), 0 0 30px rgba(110, 12, 158, 0.4)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'reveal': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'reveal': 'reveal 0.8s ease-out forwards'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-purple': 'linear-gradient(to right, #2b003d, #6e0c9e)',
				'gradient-metallic': 'linear-gradient(to right bottom, #c0c0c0, #f0f0f0)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
