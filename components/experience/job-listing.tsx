import { Container, Text } from 'ui'
import {
  AccountMultipleIcon,
  CalendarIcon,
  ClockIcon,
  LocationIcon,
} from 'ui/icons'
import { useTranslation } from 'lib/translation'
import { motion } from 'framer-motion'
import {
  slideHorizontalVariants,
  slideUpVariants,
} from 'lib/animation-variants'

interface JobListingProps {
  abbreviation: string
  logoSrc: string
  id?: string
}

export const JobListing = ({ abbreviation, logoSrc, id }: JobListingProps) => {
  const { t } = useTranslation('experience')

  return (
    <section className="flex flex-col" id={id}>
      <Container>
        <div className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 mt-4 lg:mt-0">
            <motion.div
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              viewport={{ once: true, amount: 0.7 }}
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
            >
              <Text variant="h1">{t(`${abbreviation}.title`)}</Text>
              <Text variant="sub" className="mt-2">
                {t(`${abbreviation}.company`)}
              </Text>
            </motion.div>

            <motion.div
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25 }}
              viewport={{ once: true, amount: 0.7 }}
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              className="mt-12 space-y-4"
            >
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
            </motion.div>

            <motion.div
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.25 }}
              viewport={{ once: true, amount: 0.7 }}
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              className="mt-12"
            >
              <Text>{t(`${abbreviation}.description`)}</Text>
            </motion.div>
          </div>
          <motion.div
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.7 }}
            variants={slideHorizontalVariants('left')}
            initial="hidden"
            whileInView="visible"
            className="col-span-12 lg:col-span-4 lg:col-start-9 order-1 lg:order-2"
          >
            <img
              src={logoSrc}
              alt="Company logo"
              className="w-full max-w-xs lg:max-w-md h-auto mx-auto block rounded-full"
            />
          </motion.div>
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
