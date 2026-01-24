import { ContentSection } from '@/features/settings/components/content-section.tsx'
import { SystemConfigForm } from '@/features/settings/system/system-config-form.tsx'
import { Cog } from 'lucide-react'

export function SettingsSystem() {
  return (
    <ContentSection
      title='系统配置'
      desc='一些零碎的配置项'
      icon={<Cog className='h-5 w-5 text-primary' />}
    >
      <SystemConfigForm />
    </ContentSection>
  )
}
