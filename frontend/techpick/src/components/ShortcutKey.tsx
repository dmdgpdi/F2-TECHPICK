'use client';

import { useCallback, useEffect } from 'react';
import { eventEmitter } from '@/utils/eventEmitter';

export default function ShortcutKey() {
  /**
   * @description 이벤트를 emit으로 발생시키는 함수입니다.
   * if문으로 추가하심 키를 추가하고 이벤트 이름을 생성하심 됩니다.
   */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.metaKey && e.key === 'p') {
      e.preventDefault();
      eventEmitter.emit('open-search-dialog');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return null;
}