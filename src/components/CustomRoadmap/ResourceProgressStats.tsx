import { HelpCircle } from 'lucide-react';
import { cn } from '../../lib/classname';
import type { ResourceType } from '../../lib/resource-progress';
import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { canManageCurrentRoadmap, currentRoadmap } from '../../stores/roadmap';
import { ShareOptionsModal } from '../ShareOptions/ShareOptionsModal';

type ResourceProgressStatsProps = {
  resourceId: string;
  resourceType: ResourceType;
  isSecondaryBanner?: boolean;
};

export function ResourceProgressStats(props: ResourceProgressStatsProps) {
  const { isSecondaryBanner = false } = props;

  const [isSharing, setIsSharing] = useState(false);

  const $canManageCurrentRoadmap = useStore(canManageCurrentRoadmap);
  const $currentRoadmap = useStore(currentRoadmap);

  return (
    <>
      {isSharing && $canManageCurrentRoadmap && $currentRoadmap && (
        <ShareOptionsModal
          isDiscoverable={$currentRoadmap.isDiscoverable}
          description={$currentRoadmap?.description}
          visibility={$currentRoadmap?.visibility}
          teamId={$currentRoadmap?.teamId}
          roadmapId={$currentRoadmap?._id!}
          sharedFriendIds={$currentRoadmap?.sharedFriendIds || []}
          sharedTeamMemberIds={$currentRoadmap?.sharedTeamMemberIds || []}
          onClose={() => setIsSharing(false)}
          onShareSettingsUpdate={(settings) => {
            currentRoadmap.set({
              ...$currentRoadmap,
              ...settings,
            });
          }}
        />
      )}
      <div
        data-progress-nums-container=""
        className={cn(
          'striped-loader relative z-50 hidden items-center justify-between bg-white px-2 py-1.5 sm:flex',
          {
            'rounded-bl-md rounded-br-md': isSecondaryBanner,
            'rounded-md': !isSecondaryBanner,
          }
        )}
      >
        <p
          className="flex text-sm opacity-0 transition-opacity duration-300"
          data-progress-nums=""
        >
          <span className="mr-2.5 rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900">
          เสร็จสิ้น <span data-progress-percentage="">0</span>% 
          </span>

          <span className="itesm-center hidden md:flex">
            <span>
              สำเร็จ <span data-progress-done="">0</span>
            </span>
            <span className="mx-1.5 text-gray-400">&middot;</span>
            <span>
              กำลังดำเนินการ <span data-progress-learning="">0</span>
            </span>
            <span className="mx-1.5 text-gray-400">&middot;</span>
            <span>
              ข้าม <span data-progress-skipped="">0</span>
            </span>
            <span className="mx-1.5 text-gray-400">&middot;</span>
            <span>
              ทั้งหมด <span data-progress-total="">0</span>
            </span>
          </span>
          <span className="md:hidden">
            เสร็จ <span data-progress-done="">0</span> จาก ทั้งหมด{' '}
            <span data-progress-total="">0</span>
          </span>
        </p>

        <div
          className="flex items-center gap-3 opacity-0 transition-opacity duration-300"
          data-progress-nums=""
        >
          <button
            data-popup="progress-help"
            className="flex items-center gap-1 text-sm font-medium text-gray-500 opacity-0 transition-opacity hover:text-black"
            data-progress-nums=""
          >
            <HelpCircle className="h-3.5 w-3.5 stroke-[2.5px]" />
            ติดตามความคืบหน้า
          </button>
        </div>
      </div>

      <div
        data-progress-nums-container=""
        className="striped-loader relative -mb-2 flex items-center justify-between rounded-md border bg-white px-2 py-1.5 text-sm text-gray-700 sm:hidden"
      >
        <span
          data-progress-nums=""
          className="text-gray-500 opacity-0 transition-opacity duration-300"
        >
          เสร็จ <span data-progress-done="">0</span> จาก ทั้งหมด{' '}
          <span data-progress-total="">0</span>
        </span>
      </div>
    </>
  );
}
