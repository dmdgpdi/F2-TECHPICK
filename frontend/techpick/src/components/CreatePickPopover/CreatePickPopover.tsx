'use client';

import { useRef, useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { fetchPickByUrl, getLinkOgData } from '@/apis/pick/getPick/getPick';
import { Button } from '@/components/Button/Button';
import { CreatePickForm } from '@/components/CreatePickForm/CreatePickForm';
import {
  popoverContentStyle,
  urlInputStyle,
  urlSubmitFormStyle,
} from '@/components/CreatePickPopover/CreatePickPopover.css';
import { useTreeStore } from '@/stores';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/Popover/Popover';
import { Text } from '@/ui/Text/Text';
import { notifyError } from '@/utils';
import { GetLinkOgTagDataResponseType } from '@/types';

export function CreatePickPopover() {
  const urlInputRef = useRef<HTMLInputElement>(null);
  const [isCreateMode, setIsCreateMode] = useState<boolean>(false);

  // -------------------------------------------------------
  const [ogData, setOgData] = useState<
    GetLinkOgTagDataResponseType & { url: string }
  >({
    url: '',
    imageUrl: '',
    title: '',
    description: '',
  });

  // -------------------------------------------------------
  const { getFolderList } = useTreeStore();

  const handleSubmit = () => {
    const urlValue = urlInputRef.current?.value;
    if (!urlValue) return;
    (async () => {
      const pick = await fetchPickByUrl(urlValue);
      if (pick) {
        notifyError('이미 픽이 존재합니다.');
        return;
      }
      const ogData = await getLinkOgData(urlValue);
      setOgData({ ...ogData, url: urlValue });
      setIsCreateMode(true);
    })(/*IIFE*/);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <PlusIcon /> New
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onCloseAutoFocus={() => {
          setIsCreateMode(false);
        }}
        sideOffset={20}
        align={'end'}
      >
        <div className={popoverContentStyle}>
          {!isCreateMode ? (
            <>
              <Text size={'lg'} weight={'light'}>
                새로운 Pick 생성
              </Text>
              <form
                onSubmit={handleSubmit}
                className={urlSubmitFormStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                onKeyDown={(e) => e.stopPropagation()}
              >
                <input
                  placeholder={'웹 주소를 입력하세요'}
                  defaultValue={'https://'}
                  type="text"
                  ref={urlInputRef}
                  className={urlInputStyle}
                />
                <Button onClick={handleSubmit}>Save</Button>
              </form>
            </>
          ) : (
            <CreatePickForm
              title={ogData.title}
              url={ogData.url}
              imageUrl={ogData.imageUrl}
              description={ogData.description}
              folderInfoList={getFolderList().filter(
                (folder) => folder.folderType === 'GENERAL'
              )}
            />
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
