import { Container, Text } from 'ui'
import {
  AccountMultipleIcon,
  CalendarIcon,
  ClockIcon,
  LocationIcon,
} from 'ui/icons'
import { useTranslation } from 'lib/translation'

interface JobListingProps {
  abbreviation: string
  logoSrc: string
}

export const JobListing = ({ abbreviation, logoSrc }: JobListingProps) => {
  const { t } = useTranslation('experience')

  return (
    <section className="flex flex-col">
      <Container>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <Text variant="h1">{t(`${abbreviation}.title`)}</Text>
            <Text variant="sub" className="mt-2">
              {t(`${abbreviation}.company`)}
            </Text>

            <div className="mt-12 space-y-4">
              <div className="flex items-center">
                <CalendarIcon size="large" />
                <Text className="ml-2">{t(`${abbreviation}.period`)}</Text>
              </div>
              <div className="flex items-center">
                <ClockIcon size="large" />
                <Text className="ml-2">{t(`${abbreviation}.employment`)}</Text>
              </div>
              <div className="flex items-center">
                <LocationIcon size="large" />
                <Text className="ml-2">{t(`${abbreviation}.location`)}</Text>
              </div>
              <div className="flex items-center">
                <AccountMultipleIcon size="large" />
                <Text className="ml-2">{t(`${abbreviation}.size`)}</Text>
              </div>
            </div>

            <Text className="mt-12">{t(`${abbreviation}.description`)}</Text>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
            <img
              src={logoSrc}
              alt="Company logo"
              className="w-full max-w-md h-auto mx-auto block rounded-full"
            />
          </div>
        </div>
      </Container>
      <Container noPadding className="mt-16">
        <section className="bg-lightblue rounded-3xl">
          <div className="px-3 sm:px-8 py-8 md:py-12 lg:px-8 xl:px-16">
            <Text variant="h2" className="mb-8">
              {t('helped')}:
            </Text>

            <div className="grid grid-cols-12 gap-8 lg:gap-16">
              {[...new Array(4).fill(4)].map((_item, index) => (
                <div key={index} className="col-span-12 lg:col-span-6">
                  <Text>- {t(`${abbreviation}.helped.${index}`)}</Text>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}
