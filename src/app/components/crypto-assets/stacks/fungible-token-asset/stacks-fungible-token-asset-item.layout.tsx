import { styled } from 'leather-styles/jsx';

import { StacksFungibleTokenAssetBalance } from '@shared/models/crypto-asset-balance.model';

import { StacksAssetAvatar } from '@app/components/crypto-assets/stacks/components/stacks-asset-avatar';
import { ItemLayout } from '@app/ui/components/item-layout/item-layout';
import { BasicTooltip } from '@app/ui/components/tooltip/basic-tooltip';
import { Pressable } from '@app/ui/pressable/pressable';

import { parseStacksFungibleTokenAssetBalance } from './fungible-token-asset.utils';

interface StacksFungibleTokenAssetItemLayoutProps {
  assetBalance: StacksFungibleTokenAssetBalance;
  onClick?(): void;
}
export function StacksFungibleTokenAssetItemLayout({
  assetBalance,
  onClick,
}: StacksFungibleTokenAssetItemLayoutProps) {
  const {
    amount,
    avatar,
    balanceAsFiat,
    caption,
    dataTestId,
    formattedBalance,
    imageCanonicalUri,
    title,
  } = parseStacksFungibleTokenAssetBalance(assetBalance);

  return (
    <Pressable data-testid={dataTestId} onClick={onClick} my="space.02">
      <ItemLayout
        flagImg={
          <StacksAssetAvatar
            color="white"
            gradientString={avatar}
            imageCanonicalUri={imageCanonicalUri}
          >
            {title[0]}
          </StacksAssetAvatar>
        }
        titleLeft={title}
        captionLeft={caption}
        titleRight={
          <BasicTooltip
            asChild
            label={formattedBalance.isAbbreviated ? amount : undefined}
            side="left"
          >
            <styled.span data-testid={title} textStyle="label.02">
              {formattedBalance.value}
            </styled.span>
          </BasicTooltip>
        }
        captionRight={balanceAsFiat}
      />
    </Pressable>
  );
}
