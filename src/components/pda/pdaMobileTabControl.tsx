/** @jsx jsx */
import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  Ref,
  useState,
} from 'react';
import { jsx, css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { darken, transparentize } from 'polished';

import { PDATab } from '../../game/pda';

import pdaBorderTopCenter from '../../assets/ui/modals/Border1-TopCenter.png';
import pdaBorderBotRight from '../../assets/ui/modals/Border4-BotRight.png';

import PdaBorderTopRight from '../../assets/ui/modals/Border2-TopRight.svg?component';
import CloseIcon from '../../assets/ui/pda/PDA-RetourAuJeu.svg?component';
import HomeIcon from '../../assets/ui/pda/PDA-LePDA.svg?component';
import DocumentsIcon from '../../assets/ui/pda/PDA-Documents.svg?component';
/* import MapIcon from '../../assets/ui/pda/PDA-PlanDeLaVille.svg?component'; */
import ContactIcon from '../../assets/ui/pda/PDA-Contacts.svg?component';
import EvidenceIcon from '../../assets/ui/pda/PDA-Preuves.svg?component';

interface PDANavigationLinkProps {
  selected?: boolean;
}

const PDANavigationLink: FunctionComponent<
  ButtonHTMLAttributes<HTMLButtonElement> & PDANavigationLinkProps
> = ({ selected, children, ...rest }) => (
  <button
    {...rest}
    css={theme => css`
      font: inherit;
      background: none;
      border: none;
      line-height: normal;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      font-style: italic;
      position: relative;
      white-space: nowrap;
      text-transform: uppercase;
      color: ${theme.colors.secondary};
      display: flex;

      & svg {
        margin-right: 0.8rem;
        margin-top: 0.2rem;
        height: 2.2rem;
        width: 2.2rem;
        fill: ${theme.colors.secondary};
        transition: inherit;
      }

      ${selected
        ? `
        color: ${theme.colors.yellow};
      
        & svg {
          fill: ${theme.colors.yellow};
        }
        
        &:before {
          content: " ";
          display: block;
          width: 0; 
          height: 0;
          margin-right: 0.8rem;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          
          border-left: 15px solid ${theme.colors.yellow};
        }
      `
        : ''}
    `}
  >
    {children}
  </button>
);

export interface PDATabControlProps {
  onTabClick: (tab: PDATab) => void;
  onReturnClick: () => void;
  selectedTab: PDATab;
  quizMode?: boolean;
  ref?: Ref<HTMLDivElement>;
}

export const PDAMobileTabControl = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<PDATabControlProps>
>(({ onTabClick, onReturnClick, selectedTab, quizMode, children }, ref) => {
  const [t] = useTranslation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const clickTab = (tab: PDATab) => () => {
    if (!quizMode) {
      setMenuOpen(false);
      onTabClick(tab);
    }
  };

  const handleReturnClick = () => {
    if (!quizMode) {
      onReturnClick();
    }
  };

  return (
    <div
      css={css`
        flex: 1;
        margin: 1rem 1rem;
        display: flex;
        position: relative;
        pointer-events: none;
        height: calc(100% - 2rem);

        @media only screen and (max-width: 436px) {
          margin: 0;
          height: 100%;
        }
      `}
    >
      <div
        css={css`
          flex: 1;
          overflow: hidden;
          display: grid;
          grid-template-columns: auto 33px 1fr auto 42px;
          grid-template-rows: 50px 127px 1fr 42px;
        `}
      >
        {!quizMode ? (
          <button
            css={theme => css`
              grid-row: 1;
              grid-column: 1;
              font: inherit;
              background: ${theme.colors.darkGreen};
              border: none;
              line-height: normal;
              border-bottom: 10px solid ${theme.colors.secondary};
              display: flex;
              align-items: center;
              padding: 0.5rem;
              color: ${menuOpen ? theme.colors.yellow : theme.colors.secondary};
              z-index: 3;
              text-transform: uppercase;
              pointer-events: auto;
              font-size: 1.8rem;
              margin: 0;
              font-style: italic;

              @media only screen and (max-width: 320px) {
                font-size: 1.5rem;
              }

              & svg {
                margin-left: -0.5rem;
                margin-right: 0.5rem;
                margin-top: 0.2rem;
                height: 2.2rem;
                width: 2.5rem;
                fill: ${menuOpen
                  ? theme.colors.yellow
                  : theme.colors.secondary};

                @media only screen and (max-width: 436px) {
                  margin-left: 0.5rem;
                  margin-right: 0.5rem;
                  width: 1.2rem;
                }

                @media only screen and (max-width: 320px) {
                  display: none;
                }
              }
            `}
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyPress={e => {
              if (e.code === 'Enter') {
                setMenuOpen(!menuOpen);
              }
            }}
          >
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            {t('pda_menu')}
          </button>
        ) : (
          <div
            css={theme => css`
              grid-row: 1;
              grid-column: 1;
              background: ${theme.colors.darkGreen};
              border-bottom: 10px solid ${theme.colors.secondary};
              width: 30px;
            `}
          />
        )}
        <div
          css={css`
            grid-row: 1;
            grid-column: 2;
            z-index: 3;
          `}
        >
          <img src={pdaBorderTopCenter} alt="side slant" />
        </div>
        <div
          css={theme => css`
            grid-row: 1;
            grid-column: 3;
            border-top: 6px solid ${theme.colors.secondary};
            z-index: 3;
          `}
        />
        <button
          css={theme => css`
            color: inherit;
            font: inherit;
            background: none;
            border: none;
            margin: 0;
            line-height: normal;
            grid-row: 1;
            grid-column: 4;
            padding: 0 0 0 1.7rem;
            position: relative;
            border-top: 6px solid ${theme.colors.secondary};
            z-index: 3;
            font-size: 1.8rem;

            @media only screen and (max-width: 436px) {
              font-size: 1.4rem;
            }

            @media only screen and (max-width: 320px) {
              grid-row: 1;
              grid-column: 4 / span 2;
            }
          `}
          onClick={handleReturnClick}
          onKeyPress={e => {
            if (e.code === 'Enter') {
              handleReturnClick();
            }
          }}
          tabIndex={0}
        >
          {!quizMode && (
            <React.Fragment>
              <div
                css={theme => css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 1.7rem;
                  background: linear-gradient(
                    to right top,
                    transparent 48%,
                    ${theme.colors.secondary} 49%,
                    ${theme.colors.secondary} 51%,
                    ${theme.colors.secondary} 52%
                  );
                `}
              />
              <div
                css={theme => css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  height: 100%;
                  padding: 0.5rem 0.5rem 1rem;
                  background-color: ${theme.colors.secondary};
                  cursor: pointer;
                  white-space: nowrap;
                  pointer-events: auto;

                  & svg {
                    margin-right: 0.4rem;
                    margin-top: 0.2rem;
                    height: 2.2rem;
                    width: 2.5rem;
                  }
                `}
              >
                <CloseIcon />
                <span>{t('pda_return')}</span>
              </div>
            </React.Fragment>
          )}
        </button>
        <div
          css={css`
            grid-row: 1 / span 2;
            grid-column: 5;
            z-index: 3;

            @media only screen and (max-width: 320px) {
              display: none;
            }

            & svg {
              height: 100%;
              width: 100%;
            }
          `}
        >
          <PdaBorderTopRight />
        </div>
        <div
          css={theme => css`
            grid-row: 2 / span 2;
            grid-column: 1;
            border-left: 6px solid ${theme.colors.secondary};
            z-index: 3;
          `}
        />
        <div
          css={theme => css`
            grid-row: 3;
            grid-column: 5;
            border-right: 6px solid ${theme.colors.secondary};
            margin-top: -0.5rem;
            z-index: 3;

            @media only screen and (max-width: 320px) {
              grid-row: 2 / span 2;
            }
          `}
        />
        <div
          css={theme => css`
            grid-row: 4;
            grid-column: 1;
            border-left: 6px solid ${theme.colors.secondary};
            border-bottom: 6px solid ${theme.colors.secondary};
            margin-top: -0.5rem;
            z-index: 3;
          `}
        />
        <div
          css={css`
            grid-row: 4;
            grid-column: 5;
            z-index: 3;
          `}
        >
          <img
            src={pdaBorderBotRight}
            alt="side bottom triangle"
            css={css`
              height: auto;
              width: 42px;
            `}
          />
        </div>
        <div
          css={theme => css`
            grid-row: 4;
            grid-column: 1 / span 4;
            border-bottom: 6px solid ${theme.colors.secondary};
            z-index: 3;
          `}
        />
        <div
          css={theme => css`
            position: relative;
            grid-row: 1 / span 5;
            grid-column: 1 / span 5;
            z-index: 2;
            color: ${theme.colors.secondary};
            display: flex;
            overflow: hidden;
          `}
        >
          <div
            css={theme => css`
              position: absolute;
              display: flex;
              inset: 0;
              background: ${transparentize(
                0.3,
                darken(0.3, theme.colors.secondary)
              )};
              z-index: ${menuOpen ? '7' : '-1'};
              transition: ${menuOpen
                ? 'unset'
                : 'z-index 0.1s 0.15s, visibility 0.1s 0.15s'};

              pointer-events: ${menuOpen ? 'all' : 'none'};
              visibility: ${menuOpen ? 'unset' : 'hidden'};

              animation-name: ${menuOpen ? 'backInDown' : 'backOutUp'};
              animation-duration: 0.25s;
              animation-fill-mode: both;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                flex: 1;
                align-items: flex-start;
                justify-content: center;
                font-size: 2.2rem;
                padding: 3rem;
              `}
            >
              <PDANavigationLink
                onClick={clickTab(PDATab.HOME)}
                onKeyPress={e => {
                  if (e.code === 'Enter') {
                    clickTab(PDATab.HOME);
                  }
                }}
                tabIndex={0}
                selected={selectedTab === PDATab.HOME}
              >
                <HomeIcon />
                {t('pda_home')}
              </PDANavigationLink>
              <PDANavigationLink
                onClick={clickTab(PDATab.QUIZZES)}
                onKeyPress={e => {
                  if (e.code === 'Enter') {
                    clickTab(PDATab.QUIZZES);
                  }
                }}
                tabIndex={0}
                selected={quizMode || selectedTab === PDATab.QUIZZES}
              >
                <DocumentsIcon />
                {t('pda_documents')}
              </PDANavigationLink>
              <PDANavigationLink
                onClick={clickTab(PDATab.CONTACTS)}
                onKeyPress={e => {
                  if (e.code === 'Enter') {
                    clickTab(PDATab.CONTACTS);
                  }
                }}
                tabIndex={0}
                selected={selectedTab === PDATab.CONTACTS}
              >
                <ContactIcon />
                {t('pda_contacts')}
              </PDANavigationLink>
              <PDANavigationLink
                onClick={clickTab(PDATab.DOCUMENTS)}
                onKeyPress={e => {
                  if (e.code === 'Enter') {
                    clickTab(PDATab.DOCUMENTS);
                  }
                }}
                tabIndex={0}
                selected={selectedTab === PDATab.DOCUMENTS}
              >
                <EvidenceIcon />
                {t('pda_evidence')}
              </PDANavigationLink>
            </div>
          </div>
          <div
            css={css`
              font-size: 1rem;
              display: flex;
              position: relative;
              overflow-x: hidden;
              overflow-y: auto;
              padding: 5rem 2rem 2rem;
              flex: 1 1 auto;
              flex-direction: column;
              width: 100%;
              pointer-events: auto;
              opacity: ${menuOpen ? '0.5' : '1'};
            `}
            ref={ref}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});
