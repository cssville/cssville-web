import React, { useMemo } from 'react';
import { ReactNode } from "react";
import { Cssville } from 'cssville-generators/build/cssville';
import { Display, Text, Title } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';


export const CssClassesSection = (props: any) => {
  const generatorNodes: ReactNode[] = Cssville.generators.map((g, i) => {
    return (
      <Stack column className="wid-12" key={`node-${g.name}-${i}`}>
        <Title xl className='wid-12 bor-bot-1'>{g.name}</Title>
        {
          g.cssData.map(d =>
            <div key={`node-${g.name}-${i}-${d.className}`}>
              {d.className}: {d.cssProperties.map(
                (p, j) =>
                  <React.Fragment key={`node-${g.name}-${j}-${p}`}>
                    <span>{p}</span>
                    {j < d.cssProperties.length - 1 && <span>, </span>}
                  </React.Fragment>
              )}
            </div>
          )
        }
      </Stack>
    );
  });

  return (
    <Stack column xl noGap>
      <Display id="classes" tag="h2">
        CSS classes
      </Display>
      <Text lg className="max-wid-8 md-max-wid-12">
        Utility classes are a specific type of class that is designed to provide a single,
        focused styling property, such as padding, margin, or font size. Unlike traditional classes,
        which might be used to define more complex styles, utility classes are very simple and focused on a single aspect of the style.
      </Text>
      {generatorNodes}
    </Stack>
  );
}