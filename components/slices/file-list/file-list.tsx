import { Eyebrow } from 'components/shared/eyebrow/eyebrow'
import { MarkdownRender } from 'components/shared/markdown-renderer/markdown-renderer'
import { Container } from 'components/shared/layouts/container/container'
import { Section } from 'components/shared/layouts/section/section'
import classNames from 'classnames'
import { FileList as FileListProps } from 'sanity.types'
import { DownloadIcon } from 'lucide-react'
import { stegaClean } from 'next-sanity'

const FileList = ({
  background = 'yellow',
  eyebrow,
  title,
  description,
  items
}: FileListProps) => {
  if ((items || [])?.length === 0) {
    return null
  }

  const cleanBackground = stegaClean(background)
  const classes = {
    background: cleanBackground === 'yellow' ? 'bg-yellow-200' : 'bg-white',
    decoration:
      cleanBackground === 'yellow'
        ? 'strikethrough-white underline-white'
        : 'strikethrough-black underline-yellow',
    item:
      cleanBackground === 'yellow'
        ? 'bg-white hover:bg-yellow-100 text-black'
        : 'bg-yellow-200 hover:bg-yellow-400 text-black'
  }
  return (
    <Section className={classes.background}>
      <Container size="lg">
        {eyebrow && (
          <Eyebrow
            color={cleanBackground === 'yellow' ? 'white' : 'blue'}
            text={eyebrow}
          />
        )}
        <div className="flex justify-between flex-col gap-20 lg:gap-40 lg:flex-row">
          <div className="max-w-145">
            <div className="max-w-145">
              <h2 className={classes.decoration}>
                <MarkdownRender>{title}</MarkdownRender>
              </h2>
              {description && <p className="mb-10">{description}</p>}
            </div>
          </div>
          <div className="flex flex-col w-full max-w-145 mt-4">
            {items?.map((item) => (
              <a
                key={item._key}
                download={item.file}
                className={classNames(
                  classes.item,
                  'flex rounded-2xl px-6 py-8 no-underline text-lg justify-between items-center cursor-pointer'
                )}
              >
                {item.name}
                <DownloadIcon size={16} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default FileList
