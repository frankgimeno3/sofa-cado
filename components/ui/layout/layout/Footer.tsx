import { useTranslation } from "next-i18next"
import Link from "next/link"
import Image from "next/image"

const LINKS = {
  legal: [
    {
      label: 'terms',
      href: '/legal/terms',
    },
    {
      label: 'privacy',
      href: '/legal/privacy',
    },
    {
      label: 'cookies',
      href: '/legal/cookies',
    }
  ],
  social: [
    {
      label: 'Linkedin',
      icon: '/icons/socialIcons/linkedin.svg',
      href: 'https://www.linkedin.com/in/frankgimeno/',
    },
    {
      label: 'Twitter',
      icon: '/icons/socialIcons/twitter.svg',
      href: 'https://www.twitter.com/phershianco/',
    },
    {
      label: 'Other Social',
      icon: '/icons/socialIcons/strangesocial.svg',
      href: 'https://www.instagram.com/phershianco/',
    },
  ]
}


export const Footer = () => {
  const { t } = useTranslation('layout');
  const VAR_LINKS={
    sections:[
      {
        label: 'services',
        href: '/services',
      },
      {
        label: 'insights',
        href: '/insights',
      },
      {
        label: 'careers',
        href: '/#careers',
      },
      {
        label: 'contact',
        href: '/#contact',
      }
    ]
  }
  return (
    <>
      <footer
        className="w-full bg-primary flex items-center flex-col justify-center"
      >
        <div className="max-w-7xl w-full px-4 p-[100px] space-y-[40px]">
          <div className="w-full flex flex-col md:flex-row justify-center space-y-5 md:space-y-0  items-center gap-x-20 md:justify-center flex-wrap">
          {VAR_LINKS.sections.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                >
                  <div>
                    <a>
                      {/* <FadedP className="text-white font-title ">{t('links.' + link.label)}</FadedP> */}
                      {t('links.' + link.label)}
                    </a>
                  </div>
                </Link>
              ))}
          </div>
          <div className="w-full">
            <Image alt='divider' src='/icons/lines/Divider.svg' width={1500} height={3} objectFit="cover" />
          </div>
          <div className="w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-center items-center gap-x-10 lg:justify-between flex-wrap">
            {/* <div className="flex flex-1 items-center">
              <PhershianLogo />
            </div> */}
            <div className="flex space-x-6 flex-1 items-center  justify-center">
              {LINKS.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                >
                  <div>
                    <a>
                      {/* <FadedP className="text-white text-base">{t('links.' + link.label)}</FadedP> */}
                      {t('links.' + link.label)}
                    </a>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex flex-1 items-center justify-end gap-5">
              {LINKS.social.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white font-bold hover:shadow-white hover:shadow-sm rounded-full "
                  target={'_blank'}
                  rel="noreferrer"
                >
                  {/* <FadedImg
                    src={link.icon}
                    alt={link.label}
                    className={link.label === 'Instagram' ? "w-6 h-6" : "w-8 h-8"}
                  /> */}
                  <Image src={link.icon}
                    alt={link.label}
                    className={link.label === 'Instagram' ? "w-6 h-6" : "w-8 h-8"}
                    />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full mt-4 text-center text-white font-poppins text-xs">
            {t("copyright")}
          </div>
        </div>
      </footer>
    </>
  )
}